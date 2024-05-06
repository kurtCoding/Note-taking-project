import data from "../data/data.json";

export default function AboutUs() {
  return (
    <section className="max-w-[70%] mx-auto my-auto pl-28">
      <h1 className="text-3xl font-bold my-6 text-center text-font ml-14">Meet Our Team</h1>
      <div 
      className="grid grid-cols-2 gap-6 mt-18 ml-16"
      >
        {data.map((data, index) => (
          <div key={index} className="bg-nav shadow-neutral-500 shadow-inner rounded-lg p-8 pt-6">
            <div className="flex items-center mb-3">
              <img
                src={data.profilePic}
                alt={`Profile of ${data.name}`}
                className="w-14 h-14 rounded-full mr-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-font">{data.name}</h2>
            </div>
            <p className="text-font mb-2"><b>Title</b>: {data.title}</p>
            <p className="text-font mb-2"><b>Skills</b>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minima nesciunt fuga harum repudiandae repellendus magni earum accusamus eum veniam iusto quos aliquam mollitia cupiditate ab delectus fugiat quaerat expedita!</p>
            <p className="text-font"><b> Bio</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque totam cumque vero necessitatibus possimus distinctio eaque deleniti tenetur placeat aspernatur beatae at corrupti blanditiis soluta aliquid, expedita, similique dolorum facere.</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}
