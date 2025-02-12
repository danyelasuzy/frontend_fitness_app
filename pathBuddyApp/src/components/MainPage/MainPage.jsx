import Header from "./header/Header";
import MainContent from "./MainContent";


const MainPage = () => {
	return (
		<>
			<Header className="mx-auto mb-5 p-8" />
			<MainContent className="m-10 p-12" />
		</>	
	);
};

export default MainPage;

// EXPLANATION of the Tailwind CSS classes used in MainPage.jsx:
/*Header (<Header className="mx-auto mb-5 p-8" />):
mx-auto: Centers the element horizontally by setting margin-left and margin-right to auto.
mb-5: Applies a bottom margin of 1.25rem (20px).
p-8: Adds padding of 2rem on all sides.
MainContent (<MainContent className="m-10 p-12" />):
m-10: Applies margin of 2.5rem (40px) on all sides.
p-12: Adds padding of 3rem (48px) on all sides.
 */