import { useState, useEffect } from 'react';

function useScroll() {
	const [isBottom, setIsBottom] = useState(false);
	useEffect(()=> {
		// console.log('뷰포트의 높이 :', window.innerHeight);
		// console.log('총 높이 :', document.documentElement.offsetHeight);
		window.addEventListener("scroll", () => {
			// innerHeight :  뷰포트의 높이
			// scrollTop : 타겟요소가 화면 상단으로부터 스크롤된 길이
			// offsetHight : 컨텐츠의 전체 높이를 의미함.
			// 뷰포트 높이 + 스크롤 값이 화면 전체의 높이보다 크거나 같다면.
			setIsBottom(window.innerHeight + document.documentElement.scrollTop + 5 >=
				document.documentElement.offsetHeight);
			// console.log(isBottom);
		});
	});

	return isBottom;
}

export default useScroll;
