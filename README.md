## Shark Attack

The goal of this project was to help us learn more about react state and props. You take students from an array and on the click of the shark attack button, you change the isDead value of true to false. When the value changes your student is now in the graveyard.

### Visit Site
https://killer-shark.netlify.app/

### Screenshot
![img](https://user-images.githubusercontent.com/67443077/99034157-25f7d400-2542-11eb-9cdc-a100cd7a0c7f.png)

### Code Snippet
```
class DeadStudent extends Component {
  render() {
    const { firstName, lastName, imageUrl } = this.props.student;

    return (
      <div className='col-3 m-1'>
        <Card className='graveCard' >
            <CardTitle tag='p'><del>
              {firstName} {lastName}
              </del>
            </CardTitle>
          <CardImg top width='100%' src={imageUrl} alt='Student Image' className="rounded-circle" />
        </Card>
      </div>
    );
  }
}
```

