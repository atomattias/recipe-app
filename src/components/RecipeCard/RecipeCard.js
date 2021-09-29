import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardImg,
} from "reactstrap";

function RecipeCard(props) {
  return (
    <div>
      <Card style={{ padding: 30, width: "30rem" }} className="text-center">
        <CardImg
          top
          src="https://www.sidechef.com/article/3baf5e87-fa83-4730-a087-ab08fe2554e1.jpg?d=1200x560"
          alt="..."
          style={{
            alignSelf: "center",
            width: "100%",
            borderRadius: "0.35rem",
          }}
        />
        <CardBody>
          <div className="info">
            <h4 className="info-title">{props.title}</h4>
            <p>
              <small
                className="text-muted"
                style={{ textTransform: "uppercase" }}
              >
                {props.category}
              </small>
            </p>
            <p>{props.description}</p>
          </div>

          <CardLink href="/#/" style={{ textDecoration: "none" }}>
            Read more
          </CardLink>
          <CardLink href="/#/" style={{ textDecoration: "none" }}>
            {props.user}
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
}

export default RecipeCard;
