export const Button=({onClick,value})=>{
    return <div className="pt-5">
        <button  onClick={onClick} type="button" class="text-white w-full bg-gradient-to-br from-purple-400 to-violet-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-violet-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{value}</button>
    </div>
}