// import { ComponentPropsWithoutRef } from 'react';

// type ButtonProps = {
// 	el: 'button';
// } & ComponentPropsWithoutRef<'button'>;

// type AnchorProps = {
// 	el: 'anchor';
// } & ComponentPropsWithoutRef<'a'>;

// export default function Button(props: ButtonProps | AnchorProps) {
// 	if (props.el === 'anchor') {
// 		return <a className='button' {...props}></a>;
// 	}
// 	return <button className='button' {...props}></button>;
// }

////alternative way - this way you dont have to always add an 'el' prop on the elements
// this does have a downside - you are able to mix and match anchor and button props in app.tsx
// bc ts doesnt know which props we are deciding to pass in, just that it could be button or anchor
///sooo this allow us to put hrefs on buttons etc which we do not want

import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
	href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
	href?: string;
};

///type predicate - a helper function
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
	return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
	if (isAnchorProps(props)) {
		return <a href='' className='button' {...props}></a>;
	}
	return <button className='button' {...props}></button>;
}
