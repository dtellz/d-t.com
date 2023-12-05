import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const ProjectCard = (props) => {
    const [traduction, _] = useTranslation('global');

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={props.img}
            title={props.name + 'project image'}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{traduction("project.production")}</Button>
            <Button size="small">{traduction("project.source")}</Button>
          </CardActions>
        </Card>
      );
}

export default ProjectCard;