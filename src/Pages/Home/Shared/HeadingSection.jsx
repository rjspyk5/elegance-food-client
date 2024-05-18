export const HeadingSection = ({ heading, subheading }) => {
  return (
    <div className="max-w-md mx-auto">
      <p className="text-center  py-2 text-yellow-600 text-sm italic">
        {subheading}
      </p>
      <h6 className="text-center border-y-4  py-2 text-lg">{heading}</h6>
    </div>
  );
};
