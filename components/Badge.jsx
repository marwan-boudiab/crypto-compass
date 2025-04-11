const Badge = ({
  containerStyles,
  badgeCount,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="flex items-center gap-x-2">
        <div className="text-2xl leading-none font-bold text-primary-foreground">
          {badgeCount}
        </div>
        <div className="max-2-[4.375rem] leading-none text-[0.938rem] font-medium text-primary-foreground">{badgeText}</div>
      </div>
    </div>
  );
};
export default Badge;
