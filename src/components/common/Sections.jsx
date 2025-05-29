const Sections = ({ title, children, ...props }) => (
  <div className={`flex flex-col gap-2 box ${props.className}`}>
    <h2 className="text-xl font-semibold">{title}</h2>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

export default Sections;
