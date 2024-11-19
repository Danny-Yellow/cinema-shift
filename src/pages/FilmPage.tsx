import { FilmInfo } from '@src/components/FilmInfo';
import { FilmSchedule } from '@src/components/FilmSchedule';
import { ArrowBack } from '@src/components/icons';
import { SeatSelection } from '@src/components/SeatSelection';
import { Link } from '@src/components/UI/Link';
import { useGetFilmQuery, useGetScheduleQuery } from '@src/store/api/api';
import { getSelectedSchedule } from '@src/store/features/schedule/selectors/selectedScehdule';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export const FilmPage = () => {
	const { id } = useParams() as { id: string };

	const filmQuery = useGetFilmQuery(id);
	const scheduleQuery = useGetScheduleQuery(id);

	const selectedSchedule = useSelector(getSelectedSchedule);

	const navigate = useNavigate();

	if (filmQuery.isSuccess && scheduleQuery.isSuccess) {
		return (
			<>
				<div className="mb-6">
					<Link
						color="gray"
						startIcon={<ArrowBack />}
						onClick={() => navigate(-1)}
					>
						Назад
					</Link>
				</div>
				<FilmInfo film={filmQuery.data.film} />
				<div className="my-12">
					<FilmSchedule
						schedules={scheduleQuery.data.schedules}
						selectedSchedule={selectedSchedule}
					/>
				</div>
				<div className="mb-36">
					{selectedSchedule.seance && (
						<SeatSelection schedule={selectedSchedule} />
					)}
				</div>
			</>
		);
	}
};
