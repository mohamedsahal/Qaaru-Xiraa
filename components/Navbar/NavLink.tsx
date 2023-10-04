import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface Props {
	linkName: string;
	link: string;
	icon?: ReactNode;
}

const NavLink = (props: Props) => {
	const { linkName, link, icon } = props;

	const currentPathname = usePathname();

	return (
		<Link
			className={'flex  text-primary-gray-2 capitalize f-c gap-1 hover:bg-Secondary hover:!text-primary-color px-3 py-2 rounded-md transition '}
			href={`/${link}`}
		>
			
			<span className={`text-lg font-semibold min-h-full`}>{linkName}</span>
		</Link>
	);
};

export default NavLink;
