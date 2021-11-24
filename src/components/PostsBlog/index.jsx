import { Base, ItemsDiv, Div } from './styles';
import { BlogText } from '../BlogText';
import { DefaultText } from '../DefaultText';
import { useState } from 'react';

export function PostsBlog(props) {
  const [post, setPost] = useState([
    {
      active: false,
      id: 1,
      title: 'asdsad',
      date: 'sadsadas',
    },
  ]);

  const [value, setValue] = useState([]);

  function separateStyles(val) {
    if (val == value.length) {
      return null;
    } else {
      return '0 0 32px 0';
    }
  }

  return (
    <Base {...props}>
      <ItemsDiv>
        {post[0].active
          ? post.map((item) => {
              return (
                <Div key={item.id} margin="80px 0 0 0">
                  <BlogText
                    margin="0 0 24px 0"
                    fontSize="54px"
                    fontWeight="900"
                    lineHeight="60px"
                  >
                    {item.title}
                  </BlogText>
                  <DefaultText
                    margin="0 0 32px 0"
                    fontWeight="400"
                    color="#A8A8B3"
                  >
                    {item.date}
                  </DefaultText>
                  <DefaultText
                    margin="0 0 64px 0"
                    fontSize="18px"
                    fontWeight="400"
                    lineHeight="25px"
                  >
                    React was introduced in May 2013. Its paradigm shift was
                    that your UI was a function of your state. Given some
                    component state, React can determine what your component
                    will look like. React is built upon the idea of state.
                    However, state has long been one of the most difficult parts
                    of building a React application. <br />
                    Let's imagine state management in React as a rugged tool
                    belt. You've used this tool belt for years, slowly adding
                    new tools as needed. Each tool serves a very specific
                    purpose. You don't use your hammer to screw in bolts. As a
                    craftsman, you've learned the right time and place to use
                    each tool. <br />
                    State management with React is a rugged tool belt, but not
                    everyone has the prior experience to know which tool to
                    reach for. This post will explain the past, present, and
                    future of state management to help you make the correct
                    decision for your team, project, or organization.
                  </DefaultText>
                  <DefaultText fontSize="24px" margin="0 0 40px 0">
                    Glossary
                  </DefaultText>
                  <DefaultText
                    margin="0 0 32px 0"
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="25px"
                  >
                    Before we begin, it's critical you understand some of the
                    terms commonly used. These aren't the canonical names. A few
                    different variations of each float around, but the
                    underlying ideas are the same:
                  </DefaultText>
                  <ul>
                    <li>
                      <DefaultText
                        lineHeight="25px"
                        fontWeight="400"
                        fontSize="18px"
                      >
                        UI State – State used for controlling interactive parts
                        of our application (e.g. dark mode toggle, modals).
                      </DefaultText>
                    </li>
                    <br />
                    <li>
                      <DefaultText
                        lineHeight="25px"
                        fontWeight="400"
                        fontSize="18px"
                      >
                        Server Cache State – State from the server, which we
                        cache on the client-side for quick access (e.g. call an
                        API, store the result, use it in multiple places).
                      </DefaultText>
                    </li>
                    <br />
                    <li>
                      <DefaultText
                        lineHeight="25px"
                        fontWeight="400"
                        fontSize="18px"
                      >
                        Form State – The many different states of a form (e.g.
                        loading, submitting, disabled, validation, retrying).
                        There's also controlled & uncontrolled form state.
                      </DefaultText>
                    </li>
                    <br />
                    <li>
                      <DefaultText
                        lineHeight="25px"
                        fontWeight="400"
                        fontSize="18px"
                      >
                        URL State – State managed by the browser (e.g. filter
                        products, saving to query parameters, and refreshing the
                        page to see the same products filtered)
                      </DefaultText>
                    </li>
                    <br />
                    <li>
                      <DefaultText
                        lineHeight="25px"
                        fontWeight="400"
                        fontSize="18px"
                      >
                        State Machine – An explicit model of your state over
                        time (e.g. a stoplight goes from green → yellow → red,
                        but never green → red).
                      </DefaultText>
                    </li>
                  </ul>
                </Div>
              );
            })
          : value.map((item) => {
              return (
                <Div
                  cursor="pointer"
                  margin="32px 0 0 0"
                  padding={separateStyles(item.id)}
                  key={item.id}
                  onClick={() =>
                    setPost([
                      {
                        active: true,
                        id: item.id,
                        title: item.title,
                        date: item.date,
                      },
                    ])
                  }
                >
                  <DefaultText
                    fontWeight="400"
                    color="#A8A8B3"
                    margin="0 0 16px 0"
                  >
                    {item.date}
                  </DefaultText>
                  <BlogText margin="0 0 5px 0">{item.title}</BlogText>
                  <DefaultText
                    fontWeight="400"
                    color="#A8A8B3"
                    margin="0 0 16px 0"
                  >
                    {item.subtitle}
                  </DefaultText>
                </Div>
              );
            })}
      </ItemsDiv>
    </Base>
  );
}
