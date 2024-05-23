import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
return (
	<header className="flex items-center justify-between py-10">
		<div>
			<Link href="/" aria-label={siteMetadata.headerTitle}>
				<div className="flex items-center justify-between">
					<div className="mr-3">
						<Logo />
					</div>
					{typeof siteMetadata.headerTitle === 'string' ? (
						<div className="hidden h-6 text-2xl font-semibold sm:block">
							{siteMetadata.headerTitle}
						</div>
					) : (
						siteMetadata.headerTitle
					)}
				</div>
			</Link>
		</div>
		<div className="flex items-stretch space-x-5 leading-9 sm:space-x-3">
			{headerNavLinks
				.filter((link) => link.href !== '/')
				.map((link) => (
					<Link
						key={link.title}
						href={link.href}
						className="hidden font-increase-effect horizontal-underline text-base font-extrabold sm:block"
					>
						{link.title}
					</Link>
				))}
			<ThemeSwitch />
			<MobileNav />
		</div>
	</header>
)
}

export default Header