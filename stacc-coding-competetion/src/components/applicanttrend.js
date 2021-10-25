import s from './applicanttrend.module.css';

function ApplicantTrend() {
    return (
        <div className={s.formatter}>
            <div className={s.lines}>100</div>
            <div className={s.lines}>75</div>
            <div className={s.lines}>50</div>
            <div className={s.lines}>25</div>
            <div className={s.lines}>
                0
                <div className={s.bars}>
                    <div className={s.test}></div>
                    <div className={s.test1}></div>
                    <div className={s.test2}></div>
                    <div className={s.test3}></div>
                    <div className={s.test4}></div>
                    <div className={s.test5}></div>
                    <div className={s.test6}></div>
                </div>
            </div>
        </div>
    );
}

export default ApplicantTrend;
