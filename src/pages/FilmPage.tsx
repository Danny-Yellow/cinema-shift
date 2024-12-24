import { FilmInfo } from '@src/components/FilmInfo';
import { FilmInfoSkeleton } from '@src/components/FilmPageSkeleton';
import { FilmSchedule } from '@src/components/FilmSchedule';
import { ArrowBack } from '@src/components/icons';
import { SeatSelection } from '@src/components/SeatSelection';
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
		return (
			<div className="mt-[72px]">
				<FilmInfoSkeleton />
			</div>
		);

	if (filmQuery.isSuccess && scheduleQuery.isSuccess) {
		return (
			<div className="mt-6">
				<Link
					color="gray"
					startIcon={<ArrowBack />}
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
					<SeatSelection className="mb-36" schedule={scheduleSeatSelection} />
				)}
			</div>
		);
	}
};
