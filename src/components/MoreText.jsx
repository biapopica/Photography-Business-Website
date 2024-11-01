import { useState } from 'react'

export default function MoreText({ onUpdateReadMore }) {
	return (
		<div>
			<p>
				Imaginile cu natura în diversele ei manifestări, precum și cele cu oamenii și locurile lor,
				m-au atras din copilărie când răsfoiam diverse atlasuri și când urmăream la TVR celebra
				<span class="italic">Teleenciclopedia</span>, iar apoi pasiunea pentru fotografie a început
				într-o școală care ne-a oferit lecții de fotografiat cu aparate pe film Zenit, Pentax.
				Pasiunea s-a dezvoltat după ce am început să experimentez cu aparatele digitale și să
				descopăr, chiar să cunosc, fotografi excepționali din România.
			</p>

			<br />
			<p>
				Sunt atras de peisaje, de măreția munților, de misterul pe care-l afișează pădurile și de
				aceea, prin fotografiile mele, încerc să prezint aceste subiecte așa cum le-am simțit eu...
				minunate, impresionante, uneori simple, alteori pline de mister sau de povești.
			</p>
			<br />
			<div>
				Deși sunt orientat de mai mult timp și pe domeniul fotografiei de portret, aici dezvoltarea
				are loc treptat, pentru că a fotografia oameni implică de multe ori și cunoașterea lor și
				îmi place să mă concentrez spre surprinderea unor momente care exprimă stări, emoții,
				contexte de viață.{' '}
				<button onClick={onUpdateReadMore} type="button" className="font-bold">
					(minimizează)
				</button>
			</div>
		</div>
	)
}
