import { FilmInfo } from '@src/components/FilmInfo';
import { FilmSchedule } from '@src/components/FilmSchedule';
import { ArrowBack } from '@src/components/icons';
import { Link } from '@src/components/UI/Link';
import { useGetFilmQuery, useGetScheduleQuery } from '@src/store/api/api';
import { useNavigate, useParams } from 'react-router-dom';

export const FilmPage = () => {
	const { id } = useParams() as { id: string };

	const filmQuery = useGetFilmQuery(id);
	const scheduleQuery = useGetScheduleQuery(id);

	const navigate = useNavigate();

	if (filmQuery.isSuccess && scheduleQuery.isSuccess) {
		return (
			<>
				<div className="mb-6">
					<Link
						startIcon={<ArrowBack />}
						color="gray"
						onClick={() => navigate(-1)}
					>
						Назад
					</Link>
				</div>
				<div className="mb-12">
					<FilmInfo film={filmQuery.data.film} />
				</div>
				<FilmSchedule schedules={scheduleQuery.data.schedules} />
			</>
		);
	}
};
