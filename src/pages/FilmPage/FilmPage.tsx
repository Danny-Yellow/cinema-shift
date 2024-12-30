import { ArrowBackSmall } from '@src/components/icons';
import { FilmInfo } from '@src/components/pages/FilmInfo';
import { FilmSchedule } from '@src/components/pages/filmSchedule';
import { SeatSelection } from '@src/components/pages/seatSelection';
import { Link } from '@src/components/UI/Link';
import { useGetFilmQuery, useGetScheduleQuery } from '@src/store/api/cinemaApi';
import { closeModal } from '@src/store/features/modal/modal.slice';
import {
	reset,
	setFilmId,
} from '@src/store/features/schedule/scheduleSelection.slice';
import { getSelectedSchedule } from '@src/store/features/schedule/selectors/selectedScehdule';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FilmPageSkeleton } from './FilmPageSkeleton';

export const FilmPage = () => {
	const { id } = useParams() as { id: string };

	const filmQuery = useGetFilmQuery(id);
	const scheduleQuery = useGetScheduleQuery(id);

	const selectedSchedule = useSelector(getSelectedSchedule);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(reset());

		return () => {
			dispatch(closeModal());
		};
	}, []);

	useEffect(() => {
		if (filmQuery.data?.film) {
			dispatch(setFilmId(filmQuery.data?.film.id));
		}
	}, [filmQuery]);

	const scheduleSeatSelection = (() => {
		if (selectedSchedule.seance) {
			return {
				date: selectedSchedule.date,
				seance: selectedSchedule.seance,
			};
		}
	})();

	if (filmQuery.isLoading || scheduleQuery.isLoading)
		return <FilmPageSkeleton />;

	if (filmQuery.isSuccess && scheduleQuery.isSuccess) {
		return (
			<div className="mt-6 sm:mt-3">
				<Link
					color="gray"
					startIcon={<ArrowBackSmall />}
					onClick={() => navigate(-1)}
				>
					Назад
				</Link>
				<FilmInfo className="mt-6" film={filmQuery.data.film} />
				<FilmSchedule
					className="my-12"
					schedules={scheduleQuery.data.schedules}
					selectedSchedule={selectedSchedule}
				/>
				{scheduleSeatSelection && (
					<SeatSelection
						className="mb-36 md:mb-12"
						schedule={scheduleSeatSelection}
					/>
				)}
			</div>
		);
	}
};
