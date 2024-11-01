import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function MobileHeader({ children }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button type="button" aria-label="open button" onClick={() => setIsOpen(true)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="h-9 w-9 "
				>
					<path
						fillRule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<Transition show={isOpen}>
				<Dialog className="md:hidden" onClose={() => setIsOpen(false)}>
					<Transition.Child
						enter="transition ease-in-out duration-1000 transform"
						enterFrom="translate-x-full"
						enterTo="translate-y-0"
						leave="transition ease-in-out duration-1000 transform"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
						as={Fragment}
					>
						<div className="fixed inset-0 z-10 flex w-screen flex-col items-center justify-start overflow-y-auto bg-neutral-800 text-cream">
							<div className="flex w-full flex-col items-center">
								<Transition.Child
									enter="transition-opacity delay-300 duration-1000"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="transition-opacity delay-300 duration-1000"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
									as={Fragment}
								>
									<Dialog.Panel className="full-height flex w-full flex-col items-center justify-start pb-10">
										<div className="flex w-full items-center justify-between px-6 py-8 md:px-8">
											<div className="h-[54.28px] w-[50px] sm:h-[70.57px] sm:w-[65px] md:h-[81.43] md:w-[75px]"></div>
											<button
												type="button"
												aria-label="close button"
												onClick={() => setIsOpen(false)}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="h-9 w-9"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</div>

										<Dialog.Title className="mt-[10vh] text-center text-5xl font-extralight uppercase tracking-widest">
											Meniu
										</Dialog.Title>

										<ul className="mt-10 flex w-full flex-col items-center justify-start gap-10">
											{children}
										</ul>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	)
}

export default MobileHeader
