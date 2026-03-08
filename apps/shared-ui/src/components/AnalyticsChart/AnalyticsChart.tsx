import './AnalyticsChart.css'

import React from "react";


export type AnalyticsDataPoint = {
  label: string;
  value: number;
};

export type AnalyticsSimpleChartProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  total?: string | number;
  growth?: string;
  data?: AnalyticsDataPoint[];
  className?: string;
};

const defaultData: AnalyticsDataPoint[] = [
  { label: "Mon", value: 42 },
  { label: "Tue", value: 58 },
  { label: "Wed", value: 36 },
  { label: "Thu", value: 74 },
  { label: "Fri", value: 65 },
  { label: "Sat", value: 49 },
  { label: "Sun", value: 81 },
];

const AnalyticsSimpleChart = (props: AnalyticsSimpleChartProps) => {
  const {
    id,
    title = "Weekly Analytics",
    subtitle = "Simple demo component",
    total = "12,480",
    growth = "+12.4%",
    data = defaultData,
    className = "",
  } = props;

  const maxValue = Math.max(...data.map((item) => item.value), 1);

  return (
    <>
      <div id={id} className={`container py-4 ${className}`}>
        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body p-4">
            <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
              <div>
                <h3 className="h5 mb-1">{title}</h3>
                <p className="text-body-secondary mb-0">{subtitle}</p>
              </div>

              <div className="text-md-end">
                <div className="fs-3 fw-semibold lh-sm">{total}</div>
                <span className="badge text-bg-success rounded-pill px-3 py-2 mt-1">
                  {growth}
                </span>
              </div>
            </div>

            <div
              className="d-flex align-items-end gap-3"
              style={{ height: 220 }}
              aria-label="Analytics bar chart"
              role="img"
            >
              {data.map((item) => (
                <div
                  key={item.label}
                  className="d-flex flex-column align-items-center justify-content-end flex-fill h-100"
                >
                  <div className="small fw-semibold mb-2">{item.value}</div>

                  <div
                    className="bg-primary rounded-3 w-100"
                    style={{
                      height: `${(item.value / maxValue) * 160}px`,
                      minHeight: 16,
                      transition: "height 0.3s ease",
                    }}
                  />

                  <div className="small text-body-secondary mt-2">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="row g-3 mt-4">
              <div className="col-sm-4">
                <div className="p-3 bg-body-tertiary rounded-4">
                  <div className="small text-body-secondary">Conversion</div>
                  <div className="fs-5 fw-semibold">4.8%</div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="p-3 bg-body-tertiary rounded-4">
                  <div className="small text-body-secondary">Active Users</div>
                  <div className="fs-5 fw-semibold">1,204</div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="p-3 bg-body-tertiary rounded-4">
                  <div className="small text-body-secondary">Bounce Rate</div>
                  <div className="fs-5 fw-semibold">32%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsSimpleChart;
