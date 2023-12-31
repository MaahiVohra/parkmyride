"use client";
import { useState } from "react";

const Registration = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	return (
		<>
			<div className="firstscreen hidden">
				<div className="relative bg-white w-full h-[50.75rem] overflow-hidden text-left text-[1rem] text-slategray font-open-sans">
					<div className="">
						<input
							type="text"
							className="absolute top-[23rem] left-[2.56rem] w-[16rem] border-b border-gray-300 text-gray-900 text-xl block p-2.5 outline-none font-open-sans"
							placeholder="Enter your phone number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)} // Update phoneNumber state on input change
						/>
					</div>
					<div className="absolute top-[16rem] left-[5.13rem] text-[1.13rem] tracking-[0.2px] leading-[1.25rem] text-darkslategray inline-block w-[14.06rem] h-[1rem]">
						Enter your phone number
					</div>
					<div className="absolute w-[calc(100%-_32px)] top-[34.63rem] right-[1rem] left-[1rem] h-[3.5rem] text-center text-white">
						<div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-md bg-purple shadow-[0px_8px_20px_rgba(97,_62,_234,_0.32)]" />
						<b className="absolute h-[calc(100%-_28px)] w-[calc(100%-_40px)] top-[0.88rem] left-[1.25rem] tracking-[0.1px] leading-[1.5rem] flex items-center justify-center">
							Next
						</b>
					</div>
					<div className="absolute top-[7.94rem] left-[8rem] w-[7.44rem] h-[5rem] text-[1.7rem] text-purple">
						<img
							className="absolute top-[0rem] left-[4rem] w-[4.41rem] h-[5rem]"
							alt=""
							src={"./assets/rectangle-3@3x.png"}
						/>
						<div className="absolute top-[2.03rem] left-[0rem] tracking-[-0.18px] leading-[0.94rem] inline-block w-[7.23rem] h-[0.95rem]">
							<b>
								<span>Park</span>
								<span className="text-black">{` `}</span>
							</b>
							<span className="font-semibold text-ghostwhite">
								.in
							</span>
						</div>
					</div>
					{/* <div className="absolute top-[23.47rem] left-[0.97rem] box-border w-[21.5rem] h-[0.06rem] border-t-[1px] border-solid border-darkgray" />
            <div className="absolute top-[28.34rem] left-[0.97rem] box-border w-[21.5rem] h-[0.06rem] border-t-[1px] border-solid border-darkgray" /> */}
				</div>
			</div>
			<div className="screentwo">
				<div className="relative bg-white w-full h-[50.75rem] overflow-hidden text-left text-[1rem] text-slategray font-open-sans">
					<div className="absolute h-[5.42%] w-full top-[0%] right-[0%] bottom-[94.58%] left-[0%] text-center text-[0.94rem] text-black font-sf-pro-text"></div>
					<div className="">
						<input
							type="password"
							className="absolute top-[23rem] left-[2.56rem] w-[16rem] border-b border-gray-300 text-gray-900 text-xl block p-2.5 outline-none font-open-sans"
							placeholder="Password"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)} // Update phoneNumber state on input change
						/>
						<input
							type="password"
							className="absolute top-[28rem] left-[2.56rem] w-[16rem] border-b border-gray-300 text-gray-900 text-xl block p-2.5 outline-none font-open-sans"
							placeholder="Confirm Password"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)} // Update password state on input change
						/>
					</div>
					<div className="absolute top-[16rem] left-[5.13rem] text-[1.13rem] tracking-[0.2px] leading-[1.25rem] text-darkslategray inline-block w-[14.06rem] h-[1rem]">
						Create Your Password
					</div>
					<div className="absolute w-[calc(100%-_32px)] top-[34.63rem] right-[1rem] left-[1rem] h-[3.5rem] text-center text-white">
						<div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-md bg-purple shadow-[0px_8px_20px_rgba(97,_62,_234,_0.32)]" />
						<b className="absolute h-[calc(100%-_28px)] w-[calc(100%-_40px)] top-[0.88rem] left-[1.25rem] tracking-[0.1px] leading-[1.5rem] flex items-center justify-center">
							Create Account
						</b>
					</div>
					<div className="absolute top-[7.94rem] left-[8rem] w-[7.44rem] h-[5rem] text-[1.7rem] text-purple">
						<img
							className="absolute top-[0rem] left-[4rem] w-[4.41rem] h-[5rem]"
							alt=""
							src={"./assets/rectangle-3@3x.png"}
						/>
						<div className="absolute top-[2.03rem] left-[0rem] tracking-[-0.18px] leading-[0.94rem] inline-block w-[7.23rem] h-[0.95rem]">
							<b>
								<span>Park</span>
								<span className="text-black">{` `}</span>
							</b>
							<span className="font-semibold text-ghostwhite">
								.in
							</span>
						</div>
					</div>
					{/* <div className="absolute top-[23.47rem] left-[0.97rem] box-border w-[21.5rem] h-[0.06rem] border-t-[1px] border-solid border-darkgray" />
            <div className="absolute top-[28.34rem] left-[0.97rem] box-border w-[21.5rem] h-[0.06rem] border-t-[1px] border-solid border-darkgray" /> */}
				</div>
			</div>
		</>
	);
};

export default Registration;
