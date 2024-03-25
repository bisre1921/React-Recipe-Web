const ContactUs = () => {
  return (
    <div className="flex lg:flex-col gap-24 justify-center items-center py-24 bg-zinc-600 text-white">
        <h1 className="text-[50px] font-bold text-center pb-12">Contact Us</h1>
        <form action="" className="flex flex-col items-center">
            <input type="text" placeholder="your name" className="block vsm:w-[200px] md:w-[300px] w-[500px] border rounded-xl mb-8 px-5 py-2 outline-0" />
            <input type="email" placeholder="your email" className="block vsm:w-[200px] md:w-[300px] w-[500px] border rounded-xl mb-8 px-5 py-2 outline-0" />
            <textarea placeholder="your message" className="block h-full min-h-[100px] w-full resize-none rounded-[7px] px-5 py-2 mb-8  border-2 outline-0" ></textarea>
            <button className="bg-slate-800 w-40 px-4 py-2 rounded-xl hover:bg-transparent hover:border-2">Submit</button>
        </form>
    </div>
  )
}

export default ContactUs