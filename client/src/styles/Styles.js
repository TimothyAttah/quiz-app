/* eslint-disable no-tabs */
import styled from 'styled-components';
import {
  asset
} from '../components/assets';

export const MainContainer = styled.div`
	max-width: 1500px;
	width: 100%;
	height: 750px;
	margin: auto;
	display: flex;
	background-color: var(--bg-color);
	color: var(--text-white);
`;

export const MainContent = styled.div`
	width: 75%;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #020230),
		url(${asset.BackgroundImage});
	display: flex;
	flex-direction: column;
	h1 {
		position: relative;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	@media (max-width: 750px) {
		width: 70%;
	}
	@media (max-width: 450px) {
		width: 60%;
		h1 {
			font-size: 1.8rem;
		}
	}
	@media (max-width: 280px) {
		h1 {
			font-size: 1.4rem;
		}
	}
`;
export const Pyramid = styled.div`
	width: 25%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 750px) {
		width: 30%;
	}
	@media (max-width: 450px) {
		width: 40%;
	}
`;
export const MainContentTop = styled.div`
	height: 30%;
	position: relative;
`;
export const MainContentBottom = styled.div`
	height: 50%;
`;
export const TimerContainer = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	border: 5px solid var(--bg-white);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	font-weight: 700;
	position: absolute;
	bottom: 20px;
	left: 80px;
	@media (max-width: 320px) {
		left: 50px;
	}
`;

export const MoneyList = styled.ul`
	width: 100%;
	padding: 20px;
	li {
		display: flex;
		align-items: center;
		padding: 5px;
		border-radius: 5px;
		.number {
			font-size: 1.7rem;
			font-weight: 100;
			width: 30%;
		}
		.amount {
			font-size: 1.5rem;
			font-weight: 300;
		}
	}
	.active {
		background-color: teal;
	}
	@media (max-width: 750px) {
		li {
			.number {
				font-size: 1rem;
			}
			.amount {
				font-size: 1.2rem;
			}
		}
	}
	@media (max-width: 540px) {
		padding: 10px;
		li {
			.number {
				font-size: 0.7rem;
			}
			.amount {
				font-size: 0.8rem;
			}
		}
	}
	@media (max-width: 320px) {
		padding: 10px;
		li {
			.number {
				font-size: 0.6rem;
			}
			.amount {
				font-size: 0.9;
			}
		}
	}
`;

export const Review = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 300px;
h1{
  font-size: 3rem;
}
h3{
  font-size: 2rem;
  margin: 20px 0;
}
button{
  padding: 10px;
  margin-top: 20px;
  font-size: 20px;
  border-radius: 5px;
}
@media (max-width: 450px){
  h1{
    font-size: 1.5rem;
  }
  h3{
    font-size: 1.1rem;
  }
}
@media (max-width: 320px){
  h1{
    font-size: 1.2rem;
  }
  h3{
    font-size: 1rem;
  }
}
`;
