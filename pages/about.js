
import Head from "next/head";
import Contact from "@/components/contact";
const about = () => {
    return ( <div className="lg:mx-[250px] mx-[20px] text-[#E9E6D5] ">
         <Head>
        <title>About me</title>
        <meta name="description" content="your local tech nerd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
        <div className="flex justify-between mt-[100px]">
        <h1 className="text-5xl font-bold lg:text-7xl">Hey there,</h1>
        <div className="flex gap-5 mt-[15px] lg:mt-[50px]">        <a href="/" className="underline">Home</a>

</div>
        </div>
        <p className="text-2xl p-3 ">I'm zaki, a frontend developer based in Oran,Algeria and I really love coding! <br />
            beside the technologies I use in the web develoment, I also use other languages like Python,Golang,C#, I might be a webdeveloper but u can find me messing with cybersecurity stuff xD
            you can check my <a href="" className="font-bold underline">github</a>  if you are interested in my other projects. <br />
            Next summer, I'm planning to dive into the cybersecurity world and I will try to get better with Python and Typescript. <br /><br />
            As you know, I'm a high school student and I'm on my final year. I planning to get into a computer science university or anything related with technology. <br /><br />
            In my free time, I code,play chess,read tech articles/books.<br /><br />
            Feel free to contact me for collabs or asking me more question on my social media accounts

        </p>
        <Contact/>
        
        </div> );
}
 
export default about;