import React from "react";
import {
  CardAddress,
  CardContainer,
  CardContent,
  CardImage,
  CardTitle,
} from "./styles";
import Button from "../Button";

interface HealthUnitCardProps {
  name: string;
  address: string;
  onClick: () => void;
}

const HealthUnitCard: React.FC<HealthUnitCardProps> = ({
  name,
  address,
  onClick,
}) => {
  return (
    <CardContainer>
      <CardImage
        src={
          "https://s3-alpha-sig.figma.com/img/ecc1/f6ef/4e5e7d81312d429bb73270aa834becc9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bzm6gP1vE85f~PSyVonXjn6mbbdtTP30gSuEDSj6YEJ0~a~UsjobSIgFjOZwUJx6QjIQ6DIBbArIgsjbPbzrGOlNLWdHqZhB-NfQowuAAdUqhl~f-2rqbXhfZqi9~zrNZGfopjNgUabptqB9y7kU03RVCuctmSvu5HbrGYVXKMg9YRxwfOTP~gAJuyGuuic68ss~SQ6o2wbKm5MFgVSVHprRdPrs5rMv2n7xlwdujON1XDLamLZhKGBn97he3yfIfM0rnn2y1Gq5DvCfcRH9OK1DH4nOg6bslAGFjzSoj8rd9RutWYFWlSfDqE0N86jlkFF58BgSJJjPZTs~pQyvWg__"
        }
        alt={name}
      />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardAddress>{address}</CardAddress>
        <Button onClick={onClick}>Ver horários</Button>
      </CardContent>
    </CardContainer>
  );
};

export default HealthUnitCard;
