const ACTORS={
  'li-yunxiao':{name:'李云霄',queries:['李云霄','李云霄 九斤姑娘','浙江小百花 李云霄','李云霄 演出','李云霄 采访']},
  'chen-lijun':{name:'陈丽君',queries:['陈丽君','陈丽君 我的大观园','浙江小百花 陈丽君','陈丽君 演出','陈丽君 采访']}
};
const decode=s=>String(s||'').replace(/<!\[CDATA\[|\]\]>/g,'').replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g,' ').trim();
const tag=(xml,name)=>decode((xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`,'i'))||[])[1]);
const classify=t=>/票|巡演|剧场|演出|首演|开演/.test(t)?'演出与节目':/采访|专访|对话/.test(t)?'权威媒体':/抖音|视频|花絮|直播|哔哩/.test(t)?'视频平台':'综合动态';
export async function onRequestGet({request}){
  const u=new URL(request.url);let slug=u.searchParams.get('actor');
  if(!ACTORS[slug]) slug=(request.headers.get('referer')||'').includes('chen-lijun')?'chen-lijun':'li-yunxiao';
  const a=ACTORS[slug];const rows=[];
  await Promise.all(a.queries.map(async q=>{try{const rss=`https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=zh-CN&gl=CN&ceid=CN:zh-Hans`;const r=await fetch(rss,{headers:{'User-Agent':'YueVerse/3.0'}});if(!r.ok)return;const xml=await r.text();for(const item of xml.match(/<item>[\s\S]*?<\/item>/g)||[]){const title=tag(item,'title');if(!title.includes(a.name))continue;rows.push({title,desc:tag(item,'description').slice(0,180),url:tag(item,'link'),date:new Date(tag(item,'pubDate')||Date.now()).toISOString().slice(0,10),source:tag(item,'source')||'公开资讯',category:classify(title),tier:/新华|人民|中新|浙江日报|官方/.test(title+tag(item,'source'))?'A':'B'})}}catch{}}));
  const seen=new Set();const items=rows.filter(x=>{const k=x.title.replace(/[\s·｜|_-]/g,'');if(seen.has(k))return false;seen.add(k);return true}).sort((x,y)=>y.date.localeCompare(x.date)).slice(0,60);
  return new Response(JSON.stringify({actor:a.name,slug,checkedAt:new Date().toISOString(),version:'3.0.0',items}),{headers:{'content-type':'application/json; charset=utf-8','cache-control':'public,max-age=600'}})
}
