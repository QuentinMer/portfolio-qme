interface ProgressBarProps {
  skill: string;
  percentage: number;
  className?: string;
}

const ProgressBar = ({ skill, percentage, className = '' }: ProgressBarProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-family-geist text-slate-50">{skill}</span>
        <span className="text-sm font-family-geist text-slate-400">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div 
          className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
