import {NextPage} from "next"
import Link from 'next/link'


const About: NextPage = () => {
	return (
		<div>
			<p>This is About page</p>
			<Link href={'/'}>Back to home</Link>
		</div>
	)
}

export default About