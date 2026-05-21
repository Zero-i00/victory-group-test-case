import {ImageResponse} from 'next/og'

export const size = {width: 512, height: 512}
export const contentType = 'image/png'

export default function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					background: '#E21F4D',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '20%',
					fontFamily: 'sans-serif',
					fontSize: 280,
					fontWeight: 800,
					color: '#ffffff',
				}}
			>
				D
			</div>
		),
		size,
	)
}
