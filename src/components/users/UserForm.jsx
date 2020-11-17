import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  Link,
//   useRouteMatch,
  useParams
} from "react-router-dom";

export default function UserForm(props) {
    let { userId } = useParams();
    return (
        <div class="mx-auto mt-24 md:mt-18 flex justify-center" >
            <div class="leading-loose">
                <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                    <p class="uppercase text-gray-800 font-medium">{userId ? 'Update': 'Add' } user</p>
                    <div>
                        <label class="block text-sm text-gray-600" for="cus_name">Name</label>
                        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"/>
                    </div>
                    <div class="mt-2">
                        <label class="block text-sm text-gray-600" for="cus_email">Email</label>
                        <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"/>
                    </div>
                    <div class="mt-2">
                        <label class="block text-sm text-gray-600" for="cus_username">Username</label>
                        <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_username" name="cus_username" type="text" required="" placeholder="Your Username" aria-label="Username"/>
                    </div>
                    <div class="mt-2">
                        <label class="block text-sm text-gray-600" for="cus_phone">Phone Number</label>
                        <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_phone" name="cus_phone" type="text" required="" placeholder="1-770-736-8031 x56442" aria-label="Phone"/>
                    </div>
                    <div class="mt-2">
                        <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
                        <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email"/>
                    </div>
                    <div class="mt-2">
                        <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
                        <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email"/>
                    </div>
                    <div class="inline-block mt-2 w-1/2 pr-1">
                        <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                        <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email"/>
                    </div>
                    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                        <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email"/>
                    </div>
                    {/* <p class="mt-4 text-gray-800 font-medium">Payment information</p> */}
                    <div class="">
                        <label class="block text-sm text-gray-600" for="cus_name">Card</label>
                        <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name"/>
                    </div>
                    {/* <div class="mt-4">
                    <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Save</button>
                    </div> */}
                     <div className="clearfix mt-4">
                        <div className="float-left flex items-center">
                            <Link class="px-4 py-1 text-white font-light tracking-wider bg-red-700 rounded" to="/users">Cancel</Link>
                        </div>
                        <div className="float-right flex items-Center">
                            <button class="px-4 py-1 text-white font-light tracking-wider bg-green-700 rounded" type="submit">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
