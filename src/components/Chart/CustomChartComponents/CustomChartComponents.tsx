import './CustomChartComponents.scss';

type CustomToolTipProps = {
  chartType: 'pie' | 'bar';
  active?: boolean;
  payload?: { value: number; name: string }[];
  label?: string;
};

export const CustomToolTip = ({
  active,
  payload,
  label,
  chartType,
}: CustomToolTipProps) => {
  if (active) {
    console.log(payload);
    return (
      <div className='chart-tooltip'>
        <p className='chart-tooltip__label'>{`${
          chartType === 'pie' ? payload![0].name : label
        } : ${payload![0].value}`}</p>
      </div>
    );
  }
  return null;
};
