import {ImageResponse} from 'next/og'
import {SEO_TITLE, CLINIC_NAME} from '@/shared/constants/seo.constants'

export const alt = SEO_TITLE
export const size = {width: 1200, height: 630}
export const contentType = 'image/png'

export default function TwitterImage() {
	return new ImageResponse(
		(
			<div
				style={{
					background: '#E21F4D',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '60px 80px',
					fontFamily: 'sans-serif',
				}}
			>
				<div
					style={{
						color: '#ffffff',
						fontSize: 64,
						fontWeight: 800,
						lineHeight: 1.1,
						textAlign: 'center',
						marginBottom: 24,
					}}
				>
					{CLINIC_NAME}
				</div>
				<div
					style={{
						color: 'rgba(255,255,255,0.85)',
						fontSize: 28,
						fontWeight: 400,
						textAlign: 'center',
					}}
				>
					Лечение · Имплантация · Отбеливание
				</div>
			</div>
		),
		size,
	)
}
