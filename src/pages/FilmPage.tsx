import { FilmInfo } from '@src/components/FilmInfo';
import { FilmSchedule } from '@src/components/FilmSchedule';
import { ArrowBack } from '@src/components/icons';
import { SeatSelection } from '@src/components/SeatSelection';
import { Link } from '@src/components/UI/Link';
import { useGetFilmQuery, useGetScheduleQuery } from '@src/store/api/api';
import { closeModal } from '@src/store/features/modal/modal.slice';
import { getSelectedSchedule } from '@src/store/features/schedule/selectors/selectedScehdule';
import { type ComponentProps, useEffect	 } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export const FilmPage = (props: ComponentProps<'main'>) => {
	const { id } = useParams() as { id: string };

	const filmQuery = useGetFilmQuery(id);
	const scheduleQuery = useGetScheduleQuery(id);

	const selectedSchedule = useSelector(getSelectedSchedule);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(closeModal());
		};
	}, []);

	if (filmQuery.isSuccess && scheduleQuery.isSuccess) {
		return (
			<main {...props}>
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
				{selectedSchedule.seance && (
					<SeatSelection className="mb-36" schedule={selectedSchedule} />
				)}
			</main>
		);
	}
};
