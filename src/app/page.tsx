import {styled} from "@panda/jsx";
import {token} from "@panda/tokens";
import {sva, css} from "@panda/css";

const button = sva({
  slots: ['button', 'icon', 'label'],
  base: {
    button: {
      width: '160',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2',
      padding: '2',
      borderRadius: 'md',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary',
      backgroundColor: 'primary',
      color: 'white',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: 'secondary',
      }
    },
    label: {marginStart: '2'}
  },
  variants: {
    size: {
      sm: {
        button: {width: '120', padding: '1'},
      },
      md: {
        button: {width: '240', padding: '1'},
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

const Button = () => {
  const classes = button({size: 'md'})

  return (
    <button className={classes.button}>
      Button
    </button>
  )
}

export default function Home() {
  return (
    <>
      <div className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '2',
        padding: '4',
      })}>
        <Button>
          hi
        </Button>
      </div>
    </>
  );
}
