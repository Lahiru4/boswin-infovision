
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ArrowRight, Calendar, User } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      imageUrl: "https://cdn.bitrix24.com/b15879507/landing/69a/69a827bdb13c52d86c21ef5de8673dc6/asset_4_1x.jpg",
      title: "Proposed Aquasis, Capsule Manufacturing Factory Complex",
      content: "Proposed factory layout for the Aquasis Capsule Manufacturing Factory. This investment is made by Boswin Group (Pvt) Ltd, a Sri Lankan company that has operations in multiple countries. From this facility, Boswin Nutraceuticals is planning to introduce various production categories and would also be willing to provide OBM, OEM, and ODM services. We will be using the latest high-end technology and a well-experienced team in our company to give the best results to our customers. The proposed facility will be in full function by 2026",
      date: "",
      author: "",
      hasReadMore: false
    },
    {
      id: 2,
      imageUrl: "https://cdn.bitrix24.com/b15879507/landing/0a3/0a38c413ca2cc2b0f9cbe28905d06013/Image_20230815150227_2x_1x.jpg",
      title: "Boswin Set to Open Exquisite Shopping Mall on York Street",
      content: "Boswin is thrilled to confirm its upcoming venture – a luxurious shopping mall that will soon grace York Street. Get ready to indulge in an unparalleled retail experience as we bring a touch of elegance and sophistication to the heart of the city.",
      date: "",
      author: "",
      hasReadMore: true
    },
    {
      id: 3,
      imageUrl: "https://cdn.bitrix24.com/b15879507/landing/f69/f691d8b1ddecb321cbd0551e81a2dff6/274709654_5146406392070200_6428334678562842176_n_1x.jpg",
      title: "Boswin Partnered with Laksala to franchise in China!!",
      content: "Sri Lanka Handicrafts Board \"Laksala\" 06th Foreign Chartered Dealer Showroom Shijii Opening in People's China Signing of Agreement on 202.02.18 Mr. Dayasiri Jayasekara, Chairman of State Ministry of Batik Essential Fabrics and Local Products has participated. At the State Ministry of Batik Handlooms and Local Indigenous Products located in the Trade Center.",
      date: "5 June 2022",
      author: "Alex Teseira",
      hasReadMore: false
    },
    {
      id: 4,
      imageUrl: "https://cdn.bitrix24.com/b15879507/landing/395/39577f3555084ac1a22cb20f86507933/64ba4bbda310352610b95b5f_1x.jpeg",
      title: "Boswin Collaborates with Alipay to Facilitate Payments for Chinese tourists",
      content: "Chinese travelers exploring the beauty of Sri Lanka now have a seamless way to enjoy a plethora of goods and services. Through an innovative partnership between Boswin and Ant Financial Services Group, visitors can utilize Alipay – China's premier mobile payment platform – to effortlessly make transactions, making their journey even more enjoyable and hassle-free.",
      date: "",
      author: "",
      hasReadMore: false
    },
    {
      id: 5,
      imageUrl: "https://cdn.bitrix24.com/b15879507/landing/952/9520f4e506ff0084f3c3a903774bd1ed/14907567_1281393028571575_7139045178168302163_n_1x.jpg",
      title: "Xiaomi Distributors Forum Held at Beijing China 26,27 of Octomber 2016",
      content: "Sed feugiat porttitor nunc, non dignissim ipsum vestibulum in. Donec in blandit dolor. Vivamus a fringilla lorem, vel faucibus ante. Nunc ullamcorper, justo a iaculis elementum, enim orci viverra eros, fringilla porttitor lorem eros vel odio.\n\nIn rutrum tellus vitae blandit lacinia. Phasellus eget sapien odio. Phasellus eget sapien odio. Vivamus at risus quis leo tincidunt scelerisque non et erat.",
      date: "1 June 2022",
      author: "William Sh.",
      hasReadMore: false
    },
    {
      id: 6,
      imageUrl: "https://cdn.bitrix24.com/b15879507/landing/8be/8beef7e9f79b2137ac9cd37d83378f2e/13528366_1179625258748353_6543266608129738743_o_1x.jpg",
      title: "Boswin Hosts Xiomi Agents at Kingsbury Colombo",
      content: "Sed feugiat porttitor nunc, non dignissim ipsum vestibulum in. Donec in blandit dolor. Vivamus a fringilla lorem, vel faucibus ante. Nunc ullamcorper, justo a iaculis elementum, enim orci viverra eros, fringilla porttitor lorem eros vel odio.\n\nIn rutrum tellus vitae blandit lacinia. Phasellus eget sapien odio. Phasellus eget sapien odio. Vivamus at risus quis leo tincidunt scelerisque non et erat.",
      date: "1 June 2022",
      author: "William Sh.",
      hasReadMore: false
    },
    {
      id: 7,
      imageUrl: "",
      title: "Boswin Ventures into Health Sector with Essential Offerings",
      content: "In a bold move towards expansion, Boswin is proud to introduce its foray into the health sector. Presenting Boswin's comprehensive range of health essentials, including masks, thermometers, face shields, and more. With a commitment to quality and safety, Boswin extends its expertise to ensure the well-being of individuals and communities alike.",
      date: "",
      author: "",
      hasReadMore: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="section-title mb-12 text-center">Latest News</h1>
          
          {/* Featured News Item */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[400px] w-full overflow-hidden">
                <img 
                  src={newsItems[0].imageUrl}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl lg:text-3xl text-boswin-navy">{newsItems[0].title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="text-lg">{newsItems[0].content}</p>
              </CardContent>
            </Card>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                {item.imageUrl && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <img 
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader className={`${!item.imageUrl ? 'pt-6' : ''}`}>
                  {(item.author || item.date) && (
                    <CardDescription>
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        {item.author && (
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{item.author}</span>
                          </div>
                        )}
                        {item.date && (
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{item.date}</span>
                          </div>
                        )}
                      </div>
                    </CardDescription>
                  )}
                  <CardTitle className="text-xl text-boswin-navy line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 flex-grow">
                  <p className="line-clamp-3">{item.content}</p>
                </CardContent>
                {item.hasReadMore && (
                  <CardFooter className="pt-2">
                    <Button variant="link" className="px-0 text-red-500 hover:text-red-600 flex items-center gap-1">
                      Read more <ArrowRight size={16} />
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
