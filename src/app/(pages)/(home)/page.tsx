import DontStress from "@/app/(mainsite)/components/homepage/DontStress/DontStress";
import Ensure from "@/app/(mainsite)/components/homepage/Ensure/Ensure";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Party from "@/app/(mainsite)/components/homepage/Party/Party";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";


export default function Home() {
  return (
    <>
      <Header />
      <Ensure />
      <Party />
      <ServiceArea />
      <DontStress />
    </>
  )
}
