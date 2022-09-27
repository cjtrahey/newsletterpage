function App() {

  return (
   <div className="min-h-screen flex flex-col text-white">
     <main className="container mx-auto px-6 pt-16 flex-1 text-center">

       <h2 className="text-2x1 md:text-4x1 lg:text-6x1 uppercase">
         Welcome to
       </h2>
       <h1 className="text-3x1 md:text-6x1 lg:text-8x1 font-black mb-8 uppercase">
        My newsletter!
       </h1>

       <div className="text-lg md:text-2x1 lg:text-3x1 py-2 px-4 md:py-4 md:px-10 lg:py-6
      lg:px:12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
         A brand new world awaits you!
       </div>

       <form 
          action="https://www.getrevue.co/profile/cjtrahey/add_subscriber"
          method="post" 
          target="_blank">

        <div className="flex flex-col md:flex-row justify-center mb-4">
        <input 
          placeholder="e.g. john@johnsmith.com" 
          type="email" 
          name="member[email]" 
          className="text-lg md:text-2x1 placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none" />

        <input 
          type="submit" 
          value="Join today" 
          name="member[subscribe]" 
          className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2x1 text-2x1 py-4 px-6 md:px-10 lg:py-6 cursor-pointer hover:opacity-75 duration-150"/>
        </div>

        <div className="opacity-75 italic">
          By subscribing, you agree with Revue's <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
        </div>
      </form>

     </main>

     <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
      <p>2022 CJ Trahey</p>
      <div className="flex -mx-6">
        <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> |
        <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> |
        <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a> 
      </div>
     </footer>
   </div>
  )
}

export default App
