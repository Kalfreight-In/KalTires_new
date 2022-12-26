import React from 'react';



const sitemapF = [
{
    id: 1,
    PageName: 'Home',
    PageUrl: '/'
},
{
    id: 1,
    PageName: 'Home',
    PageUrl: '/'
},
{
    id: 1,
    PageName: 'Home',
    PageUrl: '/'
},
{
    id: 1,
    PageName: 'Home',
    PageUrl: '/'
},
{
    id: 1,
    PageName: 'Home',
    PageUrl: '/'
}

]

const sitemap = () => (
  <div>
    <Head>
      <title>SiteMap</title>

      <meta
        name="description"
        content="We are looking for self-motivated & enthusiastic individuals to help us achieve the best in the Heavy Vehicle industry. Email your resume at info@kvltires.com"
      />
   <div className='flex flex-col'>
   {sitemapF.map((d)=>{
    <div className='p-4 '>{d.PageName}</div>
   })}
            
   </div>
   
  </div>
);

export default sitemap;
