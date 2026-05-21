import {ImageResponse} from 'next/og'

export const size = {width: 180, height: 180}
export const contentType = 'image/png'

export default function AppleIcon() {
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
					fontFamily: 'sans-serif',
					fontSize: 100,
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
