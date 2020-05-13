import React, { Component } from "react";
import { register } from "./userFunction";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import logo_Image from "../../lib/img/common/everyshareLogo.png";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& label.Mui-focused": {
      color: "#334663",
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#334663",
      borderWidth: 2,
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  margin: {
    margin: theme.spacing(1),
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: "#334663",
    "&:hover": {
      backgroundColor: "#97616C",
      boxShadow: "none",
    },
    width: "100%",
    height: "90px",
    fontSize: "33px",
    borderRadius: "0px",
    boxShadow: "none",
  },
}))(Button);

class Register extends Component {
  constructor() {
    super();
    this.state = {
      userID: "",
      password: "",
      repassword: "",
      phoneNum: "",
      nickName: "",
      walletCode: "",
      errors: {},
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userID: this.state.userID,
      password: this.state.password,
      repassword: this.state.repassword,
      phoneNum: this.state.phoneNum,
      nickName: this.state.nickName,
      walletCode: this.state.walletCode,
    };

    console.log(newUser);

    register(newUser).then((res) => {
      this.props.history.push(`/login`);
    });
  };

  render() {
    const { classes } = this.props;

    const coustomStyle = {
      width: "350px",
      paddingLeft: "85px",
    };

    return (
      <div className={classes.root} onSubmit={this.onSubmit}>
          <Container maxWidth="sm">
            <Grid container>
              <Box
                display="flex"
                justifyContent="center"
                m={1}
                p={1}
                alignItems="center"
              >
                <Link to={"/"}>
                  <img src={logo_Image} alt="에브리쉐어" style={coustomStyle} />
                </Link>
              </Box>
              <Grid>
                <TextField
                  defaultValue={this.state.userID}
                  onChange={event => {
                    const { value } = event.target;
                    this.setState({ userID: value });
                  }}
                  label="아이디"
                  style={{ margin: 8 }}
                  placeholder="사용하실 아이디를 입력 해 주세요"
                  helperText=""
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />

                <TextField
                  defaultValue={this.state.password}
                  onChange={event => {
                    const { value } = event.target;
                    this.setState({ password: value });
                  }}
                  label="비밀번호"
                  type="password"
                  style={{ margin: 8 }}
                  placeholder="사용하실 비밀번호를 입력 해 주세요"
                  helperText=""
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />

                <TextField
                  defaultValue={this.state.repassword}
                  onChange={event => {
                    const { value } = event.target;
                    this.setState({ repassword: value });
                  }}
                  label="비밀번호 재확인"
                  type="password"
                  style={{ margin: 8 }}
                  placeholder="사용하실 비밀번호를 다시 한번 입력 해 주세요"
                  helperText=""
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />

                <TextField
                  defaultValue={this.state.phoneNum}
                  onChange={event => {
                    const { value } = event.target;
                    this.setState({ phoneNum: value });
                  }}
                  label="휴대전화 번호"
                  style={{ margin: 8 }}
                  placeholder="사용하시는 휴대전화 번호를 입력 해 주세요"
                  helperText=""
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />

                <TextField
                  defaultValue={this.state.nickName}
                  onChange={event => {
                    const { value } = event.target;
                    this.setState({ nickName: value });
                  }}
                  label="닉네임"
                  style={{ margin: 8 }}
                  placeholder="사용하실 닉네임을 입력 해 주세요"
                  helperText=""
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />

                <TextField
                  defaultValue={this.state.walletCode}
                  onChange={event => {
                    const { value } = event.target;
                    this.setState({ walletCode: value });
                  }}
                  label="월렛 코드"
                  style={{ margin: 8 }}
                  placeholder="거래에 이용하실 월렛의 코드를 입력 해 주세요"
                  helperText=""
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />

                <ColorButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={e => this.onSubmit(e)}
                  className={classes.margin}
                >
                  가입하기
                </ColorButton>
              </Grid>
            </Grid>
          </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(Register);
