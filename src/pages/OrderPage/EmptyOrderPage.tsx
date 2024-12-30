import { ArrowBack } from '@src/components/icons';
import { IconButton } from '@src/components/UI/IconButton';
import { useNavigate } from 'react-router-dom';

export const EmptyOrderPage = () => {
	const navigate = useNavigate();

	function handleBackButtonClick() {
		navigate(-1);
	}

	return (
		<div className="mt-12 sm:mt-3">
			<div className="mb-4 flex items-center gap-8 text-medium">
				<IconButton onClick={handleBackButtonClick}>
					<ArrowBack />
				</IconButton>
				<h1 className="title text-2xl">Билеты</h1>
			</div>
			<div className="mt-12 flex justify-center">
				<div className="flex flex-col items-center">
					<h3 className="title text-xl">У вас пока нет билетов</h3>
					<p>Закажите билет на главной странице</p>
				</div>
			</div>
		</div>
	);
};
