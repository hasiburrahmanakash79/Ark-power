const NewsEvent = () => {
    const newsEvent = [
        {
          id: 1,
          Category: "News",
          date: "04-june-2023",
          title: "title for news 1",
          imageUrl: "https://youmatter.world/app/uploads/2019/01/sun-solar-energy-green-clean-renewable.jpg",
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, eligendi ipsa. Harum, eos voluptatum. Sint doloremque obcaecati molestias, dolores nostrum nam cumque totam numquam! Ab mollitia fugit voluptas dolores quia maiores enim? Odit numquam deleniti exercitationem praesentium temporibus recusandae nostrum!"
        },
        {
          id: 2,
          Category: "News",
          date: "04-june-2023",
          title: "title for news 2",
          imageUrl: "https://www.arkpowerltd.com.bd/assets/images/news&event/DSC_5528.jpg",
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, eligendi ipsa. Harum, eos voluptatum. Sint doloremque obcaecati molestias, dolores nostrum nam cumque totam numquam! Ab mollitia fugit voluptas dolores quia maiores enim? Odit numquam deleniti exercitationem praesentium temporibus recusandae nostrum!"
        },
        {
          id: 3,
          Category: "News",
          date: "04-june-2023",
          title: "title for news 3",
          imageUrl: "https://www.arkpowerltd.com.bd/assets/images/news&event/DSC_5601.JPG",
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, eligendi ipsa. Harum, eos voluptatum. Sint doloremque obcaecati molestias, dolores nostrum nam cumque totam numquam! Ab mollitia fugit voluptas dolores quia maiores enim? Odit numquam deleniti exercitationem praesentium temporibus recusandae nostrum!"
        },
        {
          id: 4,
          Category: "News",
          date: "04-june-2023",
          title: "title for news 4",
          imageUrl: "https://youmatter.world/app/uploads/2019/01/sun-solar-energy-green-clean-renewable.jpg",
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, eligendi ipsa. Harum, eos voluptatum. Sint doloremque obcaecati molestias, dolores nostrum nam cumque totam numquam! Ab mollitia fugit voluptas dolores quia maiores enim? Odit numquam deleniti exercitationem praesentium temporibus recusandae nostrum!"
        },
        
      ];
  return (
    <div className="min-h-screen container mx-auto bg-slate-50 flex items-center justify-center p-6">
      <div>
        <div className="mt-24 ">
          <h1 className="text-primary text-center text-5xl uppercase">
            News & Events
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-5 my-10">
          {
            newsEvent.map((news)=> <div key={news.id}>
            <div className="relative h-44 overflow-hidden">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <p className="font-bold uppercase">{news.Category}</p>
              <p>{news.date}</p>
            </div>
            <h1 className="text-2xl font-bold mb-3">
              {news.title}
            </h1>
            <p>
              {news.details}
            </p>
          </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
