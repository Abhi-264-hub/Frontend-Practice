export const Button=({onClick,value})=>{
    return <div className="pt-5">
        <button  onClick={onClick} type="button" class="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:from-pink-500 hover:to-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-violet-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{value}</button>
    </div>
}