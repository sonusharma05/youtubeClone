import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoCard } from "@/components/videocard";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
  <div>
    <VideoCard
    title= {"how muscles are built how much regnerates"}
    thumbnail={"hi.png"}
    channel={"hi.png"}  
    author={"sonu Kumar"}
    views={"12M"}
    timestamp={"2 days ago"}
    >
      
    </VideoCard>    
  </div>)
}