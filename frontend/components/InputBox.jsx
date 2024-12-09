export const InputBox=({value})=>{
    return ( 
        <div className="pt-4">
         <label for="email" class="block mb-2 text-sm text-purple-700 font-medium">{value}:</label>
         <input type="text" class="w-full p-2  text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white" />
      </div>      
)
}