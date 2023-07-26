function CreateNewSection(props) {
  const section = [
    { number: '01', title: 'HOME' },
    { number: '02', title: 'SERVICES' },
    { number: '03', title: 'PORTFOLIO' },
    { number: '04', title: 'CONTACT' },
  ];
}

const Section = (props) => {
  return (
    <div class='py- m-5 flex font-semibold'>
      <h1>{props.number}</h1>
      <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
      <h1>{props.title}</h1>
    </div>
  );
};
export default Section;

// return <Section number={section[0].number} title={section[0].title} />;
