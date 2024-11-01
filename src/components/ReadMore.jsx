import { useState } from 'react'
import MoreText from './MoreText'

export default function ReadMore({ children }) {
	const [readMore, setReadMore] = useState(false)
	const udateReadMore = () => {
		setReadMore(!readMore)
	}
	return (
		<>
			{children}
			<div className="relative z-10 m-8 w-[80%] max-w-xl animate-showUp leading-loose xl:max-w-2xl 2xl:text-lg">
				{!readMore ? (
					<div>
						Imaginile cu natura în diversele ei manifestări, precum și cele cu oamenii și locurile
						lor, m-au atras din copilărie când răsfoiam diverse atlasuri și când urmăream la TVR
						celebra
						<span class="italic">Teleenciclopedia</span>, iar apoi pasiunea pentru fotografie a
						început într-o școală...{' '}
						<button onClick={udateReadMore} type="button" className="font-bold">
							citește mai mult
						</button>
					</div>
				) : (
					<MoreText onUpdateReadMore={udateReadMore} />
				)}
			</div>
		</>
	)
}
