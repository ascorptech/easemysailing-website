import Card from "./Card"
const Team =()=>{
    return(
        <div className=" border-2 border-red-700 flex flex-col text-center justify-center">
            <div>
                <h1 className="text-2xl font-semibold">
                    Our Team
                </h1>
            </div>
            <Card/>
        </div>
    )
}
export default Team