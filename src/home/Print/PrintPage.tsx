import qrimg from "../../assets/qrimg.jpeg";
import logo from "../../assets/LOGO.png"


function PrintPage() {
    return(
        <div className="w-full flex flex-col gap-2 p-8">

            <div className="flex justify-center gap-8 ">

                <div className="w-2/6 p-2">
                    <img src={logo} alt="LOGO" />
                </div>

                <div className="flex flex-col p-2 justify-center items-startstart">

                  <div className="flex gap-2">
                    <p className="text-md font-semibold"> Name: </p>
                    <p className="text-md">Hotel</p>
                  </div>

                  <div className="flex gap-2">
                    <p className="text-md font-semibold">Address: </p>
                    <p className="text-md">Hyderabad</p>
                  </div>

                </div>


            </div>

            <div>
            <hr className="border-t-2 border-dotted border-black w-full" />
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">

                <h1 className="text-2xl font-semibold">PARKING RECEIPT</h1>

                <div className="w-4/6 p-2">
                    <img src={qrimg} alt="qrimg" />
                </div>

            </div>

            <div className="flex flex-col justify-center items-center">

                <p className="text-xl">Ticket</p>
                <p className="text-lg font-semibold">2000051</p>

            </div>

            <div className="flex flex-col justify-center items-center">

                <p className="text-2xl text-[#797979]">Vehicle Number</p>
                <p className="text-lg font-semibold">AP 07 1234</p>

            </div>

            <div className="flex flex-col justify-center items-center">

                <p className="text-2xl text-[#797979]">Time of Arrival</p>
                <p className="text-lg font-semibold">MAR 7, 2024 1:10PM</p>

            </div>

        </div>
    )
}

export default PrintPage;