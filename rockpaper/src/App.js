import { Button, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandScissors } from "@fortawesome/free-regular-svg-icons";
import { faHand, faHandFist } from "@fortawesome/free-solid-svg-icons";

const App = () => {

  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('')
  const [userScore, setuserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [winner, setWinner] = useState('Choose!')

  const choices = ['rock', 'paper', 'scissors'];
  // const icons = [<i class="fa-solid fa-hand-back-fist"></i>, <i class="fa-solid fa-hand"></i>, <i class="fa-solid fa-hand-fist"></i>]
  const icons = [faHandFist, faHand, faHandScissors]


  const handleClick = (choice) => {
    const user = choice.target.value;
    setUserChoice(user);
    const computer = Math.floor(Math.random() * choices.length);
    setComputerChoice(computer);
    const userShi = choices[userChoice]
    const compShi = choices[computerChoice]
    if (user === computer) {
      setWinner('Draw!');
    } else if ((userShi === 'scissors' && compShi === 'paper') ||
      (userShi === 'paper' && compShi === 'rock') ||
      (userShi === 'rock' && compShi === 'scissors')) {
      setWinner('Player Wins');
      setuserScore(userScore + 1);
    }
    else {
      setWinner('You lost to a bot?');
      setComputerScore(computerScore + 1);
    };
  };

  return (
    <main>
      <Box background="tomato" minWidth="50%" display='flex' gap={'2rem'} justifyContent='center' padding="4" color="white">
        <Text>Your Score: {userScore}</Text>
        <Button onClick={handleClick} value='0'>rock</Button>
        <Button onClick={handleClick} value='1'>paper</Button>
        <Button onClick={handleClick} value='2'>Scissors</Button>
        <Text>Bot Score: {computerScore}</Text>
      </Box>

      <Box background='black' display='flex' flexDirection='column' gap='1rem' alignItems='center'>
        <h3>{winner}</h3>
        {userChoice &&
          <Box>
            <Box display='flex' flexDir='column' justifyContent='center' alignItems='center'>
              <p>{`You Chose: ${choices[userChoice]}`}</p>
              <FontAwesomeIcon size='5x' icon={icons[userChoice]} />
            </Box>


            <Box display='flex' flexDir='column' justifyContent='center' alignItems='center'>
              <p>{`Computer Chose: ${choices[computerChoice]}`}</p>
              <FontAwesomeIcon size='5x' icon={icons[computerChoice]} />
            </Box>
          </Box>
        }
      </Box>

    </main>


  );
}

export default App;
